using Microsoft.AspNetCore.Mvc;
using Shop.Domain.Models;
using Shop.Services.Interfaces;

namespace Shop.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        private readonly IShopService _shopService;

        public ShopController(IShopService shopService)
        {
            _shopService = shopService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShopModel>>> Get()
        {
            var shops = await _shopService.GetShops();
            return Ok(shops);
        }
    }
}