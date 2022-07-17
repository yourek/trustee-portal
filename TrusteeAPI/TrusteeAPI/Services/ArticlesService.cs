using TrusteeAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TrusteeAPI.Models.Entities;
using TrusteeAPI.Models.TransportObjects;

namespace TrusteeAPI.Services
{
    public class ArticlesService
    {
        private readonly IMongoCollection<Article> _articlesCollection;

        public ArticlesService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            var mongoClient = new MongoClient(
                mongoDBSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                mongoDBSettings.Value.DatabaseName);

            _articlesCollection = mongoDatabase.GetCollection<Article>(
                mongoDBSettings.Value.ArticlesCollectionName);
        }

        public async Task<List<Article>> GetAsync() =>
        await _articlesCollection.Find(_ => true).ToListAsync();

        public async Task<Article?> GetAsync(string id) =>
            await _articlesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Article newArticle) =>
            await _articlesCollection.InsertOneAsync(newArticle);

        public async Task UpdateAsync(string id, Article updatedArticle) =>
            await _articlesCollection.ReplaceOneAsync(x => x.Id == id, updatedArticle);

        public async Task RemoveAsync(string id) =>
            await _articlesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
