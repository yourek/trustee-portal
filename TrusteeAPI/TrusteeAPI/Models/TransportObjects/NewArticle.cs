namespace TrusteeAPI.Models.TransportObjects
{
    public class NewArticle
    {
        public string Title { get; set; } = null!;
        public string Date { get; set; } = null!;
        public string? Body { get; set; }
    }
}
