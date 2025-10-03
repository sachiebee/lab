const articles = [
  { title: "Tech Trends 2025", author: "Alice", category: "Technology", views: 150 },
  { title: "Healthy Living Tips", author: "Bob", category: "Health", views: 90 },
  { title: "AI in Education", author: "Alice", category: "Technology", views: 200 },
  { title: "Mental Health Awareness", author: "Clara", category: "Health", views: 120 },
  { title: "Sports Weekly", author: "David", category: "Sports", views: 180 }
];

function getTotalViews(articles) {
  let total = 0;
  for (let i = 0; i < articles.length; i++) {
    total = total + articles[i].views;
  }
  return total;
}

function filterByCategory(articles, category) {
  let result = [];
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].category === category) {
      result.push(articles[i]);
    }
  }
  return result;
}

function getMostViewedArticle(articles) {
  let mostViewed = articles[0];
  for (let i = 1; i < articles.length; i++) {
    if (articles[i].views > mostViewed.views) {
      mostViewed = articles[i];
    }
  }
  return mostViewed;
}

function groupByAuthor(articles) {
  let grouped = {};
  for (let i = 0; i < articles.length; i++) {
    let author = articles[i].author;
    if (!grouped[author]) {
      grouped[author] = [];
    }
    grouped[author].push(articles[i]);
  }
  return grouped;
}

function fetchNewArticles(callback) {
  setTimeout(function() {
    const newArticles = [
      { title: "Global Economy 2025", author: "Eve", category: "Business", views: 130 },
      { title: "New Discoveries in Space", author: "Frank", category: "Science", views: 220 }
    ];
    callback(newArticles);
  }, 2000);
}

console.log("Total Views:", getTotalViews(articles));
console.log("Technology Articles:", filterByCategory(articles, "Technology"));
console.log("Most Viewed Article:", getMostViewedArticle(articles));
console.log("Grouped by Author:", groupByAuthor(articles));

fetchNewArticles(function(newArticles) {
  console.log("Fetched New Articles:", newArticles);
});