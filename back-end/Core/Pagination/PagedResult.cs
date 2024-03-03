using Core.Entities;

namespace Core.Pagination;

public class PagedResult<T> 
    where T :  IEntity, new()
{
    public IEnumerable<T> Results { get; set; }
    public int Count { get; set; }
    
    private int Pages => (int)Math.Ceiling(Count / (double)10);

    public string? Next => currentPage < Pages ? $"page={currentPage + 1}" : null;

    public string? Prev => currentPage > 1 ? $"page={currentPage - 1}" : null;
    
    public int currentPage { get; set; }
}