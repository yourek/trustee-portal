using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TrusteeAPI.Models.Entities
{
    public class Article
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Title")]
        public string Title { get; set; } = null!;
        public string? Body { get; set; }
    }
}
