using Core.Entities;

namespace Entities;

public class Origin : BaseEntity<long>
{
    public string Name { get; set; }
    public string Link { get; set; }
}