using System.Text.Json.Serialization;
using Core.Entities;

namespace Entities;

public class Episode : BaseEntity<long>
{
    public string Name { get; set; }
    
    public string AirDate { get; set; }
    
    public string EpisodeCode { get; set; }
    
    public virtual ICollection<Character>? Characters { get; set; } 
}