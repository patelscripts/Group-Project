import NewsCard from "../components/NewsCard";

 function HomePage() {
  const newsData = [
    { title: "Breaking News 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus." },
    { title: "Breaking News 2", content: "Phasellus lacinia magna a ullamcorper laoreet. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus." },
    { title: "Breaking News 3", content: "Curabitur nec odio nec nunc fermentum dictum. Integer eget ex vitae justo tempor egestas nec sit amet sapien." },
    { title: "Breaking News 4", content: "Aliquam erat volutpat. Morbi eget dapibus velit. In ac eros ut erat cursus malesuada." },
    { title: "Breaking News 5", content: "Nunc luctus, justo nec malesuada euismod, nisl felis pharetra elit, in vulputate arcu lectus sit amet augue." },
    { title: "Breaking News 6", content: "Etiam luctus tincidunt eros, sit amet tincidunt odio facilisis eu. Fusce at semper magna." },
    { title: "Breaking News 7", content: "Mauris in ultricies risus, nec placerat elit. Donec vitae magna ac elit tincidunt fermentum." },
    { title: "Breaking News 8", content: "Vestibulum a mi non elit facilisis sagittis. Nulla porttitor feugiat tellus." },
    { title: "Breaking News 9", content: "Pellentesque in magna sed tellus volutpat fringilla eget vel felis." },
    { title: "Breaking News 10", content: "Quisque eget felis eu turpis hendrerit bibendum. Sed euismod purus ut dolor mattis." },
  ];

  return (
    <div className="bg-black min-h-screen pt-18 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {newsData.map((news, index) => (
        <NewsCard key={index} title={news.title} content={news.content} />
      ))}
    </div>
  );
}
export default HomePage;