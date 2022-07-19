using Microsoft.AspNetCore.Mvc;
using Shop.Domain.Models;
using Shop.Services.Interfaces;

namespace Shop.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        public async Task<ActionResult> Post(OrderModel model)
        {
           await _orderService.AddOrder(model);
           return Ok();
        }
    }
}
