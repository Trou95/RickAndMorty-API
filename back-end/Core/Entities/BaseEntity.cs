namespace Core.Entities;

public class BaseEntity<TId> : IEntity
{
    public TId Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public DateTime? DeletedAt { get; set; }

    public BaseEntity()
    {
        Id = default;
        CreatedAt = DateTime.UtcNow;
    }

}