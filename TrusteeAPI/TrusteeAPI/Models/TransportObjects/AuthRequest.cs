using System.ComponentModel.DataAnnotations;

namespace TrusteeAPI.Models.TransportObjects
{
    public class AuthRequest
    {
        [Required] public string User { get; set; } = null!;
        [Required] public string Password { get; set; } = null!;
    }
}
