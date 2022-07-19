using System;
using System.Collections.Generic;

namespace Shop.DB.Models
{
    public partial class Company
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public bool IsActive { get; set; }
    }
}
