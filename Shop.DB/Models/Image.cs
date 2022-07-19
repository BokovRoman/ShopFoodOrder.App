using System;
using System.Collections.Generic;

namespace Shop.DB.Models
{
    public partial class Image
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public byte[] Picture { get; set; } = null!;
        public bool IsActive { get; set; }
    }
}
