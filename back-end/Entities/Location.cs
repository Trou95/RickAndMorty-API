using Core.Entities;

namespace Entities;

public class Location : BaseEntity<long>
{
    public string Name { get; set; }
    
    public string Url { get; set; }
}