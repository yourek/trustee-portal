﻿namespace TrusteeAPI.Models
{
    public class MongoDBSettings
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string ArticlesCollectionName { get; set; } = null!;
        public string UsersCollectionName { get; set; } = null!;
    }
}
