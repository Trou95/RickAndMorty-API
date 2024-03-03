using System.Linq.Expressions;
using Core.DataAccess.Repositories.interfaces;
using Core.Entities;
using Core.Pagination;
using Core.Services.interfaces;
using Microsoft.EntityFrameworkCore.Query;

namespace Core.Services;

public abstract class  BaseService<TEntity,TEntityId> : IBaseService<TEntity>
    where TEntity : BaseEntity<TEntityId>, new()
{
    private IRepository<TEntity, TEntityId> _repository;
    
    public BaseService(IRepository<TEntity, TEntityId> repository)
    {
        _repository = repository;
    }
    
    public TEntity Add(TEntity entity)
    {
        return _repository.Add(entity);
    }

    public TEntity Update(TEntity entity)
    {
        return _repository.Update(entity);
    }

    public void Delete(TEntity entity)
    {
        _repository.Delete(entity);
    }

    public TEntity? Get(Expression<Func<TEntity, bool>> predicate, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null)
    {
        return _repository.Get(predicate, include);
    }
    
    public TEntity? Filter(Expression<Func<TEntity, bool>>[] filters, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null)
    {
        return _repository.Filter(filters, include);
    }

    public PagedResult<TEntity> GetAll(Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null, int pageNumber = 1, int pageSize = 10)
    {
        return _repository.GetAll(include, pageNumber, pageSize);
    }
}