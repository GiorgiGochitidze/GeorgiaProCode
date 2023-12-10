import '../CSS/mainpagecss/Whatwedo.css'
import coding from '../../assets/imageForcoding.jpg'

const WhatWeDo = () => {
    return ( 
        <div className='whatwedo-container'>
            <h3>რას გთავაზობთ ჩვენ?</h3>

            <div className="whatdoing-container">
                <p>

                გამარჯობა😀👋 ჩვენი პროექტი GeorgiaProCode გთავაზობთ მარტივ,<br />
                სახალისო და შემეცნებითი ფორმის ვებგვერდს სადაც 6 კლასი-დან დაწყებული,<br />
                10 კლასის მოსწავლეების ჩათვლით და უფრო მაღალი ასაკის მოსწავლეებსაც შეუძლიათ შეისწავლონ პროგრამირება მარტივად,<br />
                არა უბრალო და მოსაწყენი მასალებით არამედ თამაშისა და სხვადასხვა თასქების სახით, რომელიც<br />
                განავითარებს ბავშვის, როგორც ლოგიკურ ასევე მათემატიკურ და სხვა სახის თვისებებს.<br />
                ჩვენი პროგრამის მთავარი მიზანია რომ დავიცვათ ბავშვები ადიქციისაგან და ჩავრთოთ ისინი ისეთ პროგრამებში,
                სადაც შეეძლებათ თავის თავის განვითარება.
                </p>

                <img className='webimage' src={coding} alt="coding image" />
            </div>
        </div>
     );
}
 
export default WhatWeDo;