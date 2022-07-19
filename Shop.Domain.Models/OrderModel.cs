namespace Shop.Domain.Models
{
    public class OrderModel
    {
        public string CustomerName { get; set; } = string.Empty;
        public string CustomerEmail { get; set; } = string.Empty;
        public string CustomerNumber { get; set; } = string.Empty;
        public string CustomerAddress { get; set; } = string.Empty;
        public IEnumerable<ItemModel> Items { get; set; } = Enumerable.Empty<ItemModel>();
    }
}
