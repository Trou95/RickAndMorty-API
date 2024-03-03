using System.Linq.Expressions;
using Core.Entities;
using Core.Pagination;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;

namespace Core.DataAccess.Repositories;

public class EfRepositoryBase<TEntity, TEntityId, TContext>
    where TEntity : BaseEntity<TEntityId>, new()
    where TContext : DbContext
{
    protected readonly TContext _context;
    public IQueryable<TEntity> Query() => _context.Set<TEntity>();
    
    public EfRepositoryBase(TContext context)
    {
        _context = context;
    }
    
    public TEntity Add(TEntity entity)
    {
        _context.Add(entity);
        _context.SaveChanges();
        return entity;
    }
    
    
    public TEntity Update(TEntity entity)
    {
        entity.UpdatedAt = DateTime.Now;
        _context.Update(entity);
        _context.SaveChanges();
        return entity;
    }
    
    public void Delete(TEntity entity)
    {
        _context.Remove(entity);
        _context.SaveChanges();
    }
    
    
    public TEntity? Get(Expression<Func<TEntity, bool>> predicate, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null)
    {
        IQueryable<TEntity> queryable = Query().AsQueryable();
        
        if (include != null)
            queryable = include(queryable);
        
        return queryable.FirstOrDefault(predicate);
    }
    
    public TEntity? Filter(Expression<Func<TEntity, bool>>[] filters, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null)
    {
        IQueryable<TEntity> queryable = Query().AsQueryable();
        
        if (include != null)
            queryable = include(queryable);
        
        foreach (var filter in filters)
        {
            queryable = queryable.Where(filter);
        }
        
        return queryable.FirstOrDefault();
    }
    
    public PagedResult<TEntity> GetAll(Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null, int pageNumber = 1, int pageSize = 10)
    {
        IQueryable<TEntity> queryable = Query().AsQueryable();
        
        if (include != null)
            queryable = include(queryable);
        
        var totalCount = queryable.Count();
        var totalPages = (int)Math.Ceiling(totalCount / (double)pageSize);
        var items = queryable.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();

        return new PagedResult<TEntity>
        {
            Results = items,
            Count = totalCount,
            currentPage = pageNumber,
        };
        
    }
    
    
    
    
}