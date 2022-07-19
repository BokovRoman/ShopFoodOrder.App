namespace Shop.Domain.Models
{
    public class ShopModel
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public IEnumerable<ProductModel>? Items { get; set; }
    }
}