using BookApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {

        private static List<Book> books = new List<Book>
        {
            new Book {Id=1, Title="Sample Book", Author="Jhobe Doe", Price=100}
        };

        [HttpGet]
        public ActionResult<IEnumerable<Book>> Get() => books;

        [HttpPost]
        public ActionResult<Book> Post([FromBody] Book book)
        {
            book.Id = books.Count + 1;
            books.Add(book);
            return Ok(book);
        }
    }
}
