using System.ComponentModel.DataAnnotations;

namespace AsurityProjectBackend.Models
{
    public class ContactMethod
    {
        [Key]
        public long Id { get; set; }
        public string Method { get; set; }
    }
}
