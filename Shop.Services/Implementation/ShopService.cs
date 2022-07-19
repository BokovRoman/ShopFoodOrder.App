using Shop.DB.Models;
using Shop.Domain.Models;
using Shop.Services.Interfaces;

namespace Shop.Services.Implementation
{
    public class ShopService : IShopService
    {
        public async Task<IEnumerable<ShopModel>> GetShops()
        {

            var context = new FoodserviceDbContext();

            var companyItems = context.CompaniesItems.ToList();
            var companies = context.Companies.ToList();
            var items = context.Items.ToList();
            var images = context.Images.ToList();
            var itemsImages = context.ItemsImages.ToList();
            var prices = context.Prices.ToList();

            var shops = companies.Select((company) =>
            {
                return new ShopModel
                {
                    Id = company.Id,
                    Name = company.Name,
                    Items =
                        items.Select((item) =>
                        {
                            return new ProductModel
                            {
                                Id = item.Id,
                                Name = item.Name,
                                Description = item.Decription,
                                Price = prices?.FirstOrDefault((x)=> x.Id == item.PriceId)?.Cost,
                                Image = images.Select((image) =>
                                {
                                    return new ImageModel
                                    {
                                        Id = image.Id,
                                        Name = image.Name,
                                        Picture = image.Picture,
                                    };
                                }).FirstOrDefault((x) => itemsImages.Where((y) => y.ItemId == item.Id).Any((p) => p.ImageId == x.Id)),
                                Quantity = 0
                            };
                        }).Where((x)=> companyItems.Where((y)=> y.CompanyId == company.Id).Any((p) => p.ItemId == x.Id)).ToList()
                };
            }).ToList();

            context.Dispose();

            //var model = new ShopModel
            //{
            //    Id = 1,
            //    Name = "McDonald",
            //    Items = new List<ProductModel>
            //    {
            //        new ProductModel
            //        {
            //            Id = 1,
            //            Name = "Burger",
            //            Description = "Our tasty burger",
            //            Price = 200,
            //            Quantity = 0,
            //            Image = "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859"
            //        },
            //        new ProductModel
            //        {
            //            Id = 2,
            //            Name = "Borsch",
            //            Description = "Without worlds...Borsch",
            //            Price = 100,
            //            Quantity = 0,
            //            Image = "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859"
            //        }
            //    },
            //};

            //var model2 = new ShopModel
            //{
            //    Id = 2,
            //    Name = "KFS",
            //    Items = new List<ProductModel>
            //    {
            //        new ProductModel
            //        {
            //            Id = 1,
            //            Name = "Burger",
            //            Description = "Our tasty burger",
            //            Price = 200,
            //            Quantity = 0,
            //            Image = "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859"
            //        },
            //        new ProductModel
            //        {
            //            Id = 2,
            //            Name = "Borsch",
            //            Description = "Without worlds...Borsch",
            //            Price = 100,
            //            Quantity = 0,
            //            Image = "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859"
            //        }
            //    },
            //};

            //IEnumerable<ShopModel> test = new List<ShopModel> { model, model2 };

            return await Task.FromResult(shops);
        }
    }
}
