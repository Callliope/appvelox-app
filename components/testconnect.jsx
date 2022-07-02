import Link from "next/link";
function Blog(props) {
  const content = props.posts.map((post) => (
    <div className="showappointmentblock" key={post.id}>
      <p className="bigblogtext">
        {post.day} {post.date} | {post.time}
      </p>
      <p className="miniblogtext">{post.buildingname},</p>
      <p className="miniblogtext">{post.adress}</p>
      <img className="doctorimg" src={post.img}></img>
      <div className="textnearimg">
        <p className="bigblogtext">{post.doctorname}</p>

        <p className="transparenttext">{post.position}</p>
      </div>
      <button className="buttonStyle1">Отменить</button>
    </div>
  ));
  return <div className="flexcontainer">{content}</div>;
}

const posts = [
  {
    id: 0,
    day: "Понедельник",
    date: "15.06.20",
    time: "15:30",
    buildingname: 'СПБ ГБУЗ "Городская поликлиника №25"',
    adress: "пр. Солидарности, д. 1, к. 1, лит. А",
    img: "/malushkoimg.png",
    doctorname: "Малушко Т. Н.",
    position: "Хирургия",
  },
  {
    id: 1,
    day: "Понедельник",
    date: "15.06.20",
    time: "18:30",
    buildingname: 'СПБ ГБУЗ "Городская поликлиника №25"',
    adress: "пр. Солидарности, д. 1, к. 1, лит. А",
    img: "/charkovimg.png",
    doctorname: "Харьков В. С.",
    position: "Терапевтическое отделение",
  },
];

export default function testconnect2() {
  return (
    <div>
      <p className="titlecardblock">Записи на прием</p>
      <div className="containerconnect">
        <div>
          <Blog posts={posts} />
        </div>
        <div id="elseblock">
          <p>Еще 3 записи</p>
          <Link href="/appointmentpage">
            <a>Подробнее</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
