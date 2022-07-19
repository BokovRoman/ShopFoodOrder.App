namespace Shop.Domain.Models
{
    public class ProductModel : ItemModel
    {
        public string? Name { get; set; }

        public string? Description { get; set; }

        public int? Price { get; set; }

        public ImageModel? Image { get; set; }

    }
}
