using System.Text.Json.Serialization;
using Core.Entities;

namespace Entities;

public class Character : BaseEntity<long>
{
    public string Name { get; set; }
    
    public string Status { get; set; }
    
    public string Species { get; set; }
    
    public string Gender { get; set; }
    public Origin Origin { get; set; }
    
    public Location Location { get; set; }
    
    public string Image { get; set; }
    
    public virtual ICollection<Episode>? Episodes { get; set; }

}

