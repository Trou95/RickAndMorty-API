using Core.Entities;

namespace Entities;

public class User  : BaseEntity<long>
{
    public string Username { get; set; }
    
    public string Password { get; set; }
}