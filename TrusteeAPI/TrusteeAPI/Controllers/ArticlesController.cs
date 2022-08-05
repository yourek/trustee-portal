using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TrusteeAPI.Helpers;
using TrusteeAPI.Models.Entities;
using TrusteeAPI.Models.TransportObjects;
using TrusteeAPI.Services;

namespace TrusteeAPI.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class ArticlesController : ControllerBase
    {
        private readonly ILogger<ArticlesController> _logger;
        private readonly ArticlesService _articlesService;
        public ArticlesController(
            ILogger<ArticlesController> logger,
            ArticlesService articlesService)
        {
            _logger = logger;
            _articlesService = articlesService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Article>>> Get()
        {
            var result = await _articlesService.GetAsync();

            return result;
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Article>> Get(string id)
        {
            var result = await _articlesService.GetAsync(id);

            if (result is null)
            {
                return NotFound();
            }

            return result;
        }

        [HttpPost]
        public async Task<IActionResult> Post(NewArticle newArticle)
        {
            Article article = new Article(){ 
                Title = newArticle.Title, 
                Date = newArticle.Date,
                Body = newArticle.Body
            };

            await _articlesService.CreateAsync(article);

            return CreatedAtAction(nameof(Get), new { title = newArticle.Title }, newArticle);
        }

        [HttpPut("{id:length(24)}")] 
        public async Task<IActionResult> Update(string id, Article updatedArticle)
        {
            var article = await _articlesService.GetAsync(id);

            if (article is null)
            {
                return NotFound();
            }

            article.Id = updatedArticle.Id;

            await _articlesService.UpdateAsync(id, updatedArticle);

            return Ok();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var article = _articlesService.GetAsync(id);

            if (article is null)
            {
                return NotFound();
            }

            await _articlesService.RemoveAsync(id);

            return Ok();
        }

    }
}
