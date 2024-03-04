import CodePlayGround from '../CodePlayGround.jsx'


const Course3 = () => {
    return ( 
        <div className="entering-container">
            <h1>div, span, img და a ტეგები</h1>

            <h3>რა არის div?</h3>

            <p>ხშირად ისე ხვდება რომ სხვადასხვა ტექსტი, სურათი, ვიდეო თუ სათაური გვინდა მოვათავსოთ ერთ კონტეინერში
            ისე რომ ყველა ერთად იყოს სწორედ აქ გვეხმარება div, <b>&lt;div&gt;</b> ელემენტი მის შიგნით მყოფ ელემენტებს აქცევს 
            ერთ კონტეინერში, შედარებისთვის div არის იგივე ყუთი რომელშიც შეგიძლიათ ჩადოთ სათამაშო თუ ბურთი ნებისმიერი
            სახის ნივთი, ასევე div-ზე გამოყენებული სტილები/სტილიზაცია მიენიჭება მის შიგნით მყოფ ელემენტებსაც მათი განსაზღვრა
            შეგვიძლია CSS-ში გარდა ამისა div არის block ელემენტი block და inline ელემენტებს გავივლით შემდეგ გაკვეთილზე:
            </p>

            <CodePlayGround src="https://codesandbox.io/embed/7tdgvt?view=Editor+%2B+Preview&module=%2Findex.html" />
        </div>
     );
}
 
export default Course3;