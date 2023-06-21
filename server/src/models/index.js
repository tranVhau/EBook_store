module.exports = {
  Authors: require("./author/Author.model"),
  EBooks: require("./EBooks.model"),
  Genres: require("./genre/Genres.model"),
  GenresEBooks: require("./genre/GenreEBook.model"),
  Users: require("./account/User.Model"),
  Publishers: require("./publisher/Publisher.model"),
  Tokens: require("./account/Token.model"),
  Carts: require("./cart/Cart.model"),
  Orders: require("./payment/Order.model"),
  OrdersItems: require("./payment/OrderItems.model"),
};
