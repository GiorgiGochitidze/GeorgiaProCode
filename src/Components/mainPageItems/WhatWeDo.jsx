import '../CSS/Whatwedo.css'
import coding from './videos/coding.mp4'

const WhatWeDo = () => {
    return ( 
        <div className='whatwedo-container'>
            <h3>რას გთავაზობთ ჩვენ?</h3>

            <div className="whatdoing-container">
                <p>

                გამარჯობა ჩვენი პროექტი GeorgiaProCode გთავაზობთ მარტივ,<br />
                სახალისო და შემაცნებითი ფორმის ვებგვერდს სადაც 6 კლასი-დან დაწყებული,<br />
                10 კლასის მოსწავლეების ჩათვლით შეუძლიათ შეისწავლონ პროგრამირება მარტივად,<br />
                არა უბრალო და მოსაწყენი მასალებით არამედ თამაშისა და სხვადასხვა თასქების სახით, რომელიც<br />
                განავითარებს ბავშვის, როგორც ლოგიკურ ასევე მათემატიკურ და სხვა სახის თვისებებს.<br />
                ჩვენი პროგრამის მთავარი მიზანია რომ დავიცვათ ბავშვები ადიქციისაგან და ჩავრთოთ ისინი ისეთ პროგრამებში,
                სადაც შეეძლებათ თავის თავის განვითარება.
                </p>

                <video controls autoPlay loop width='600px' height='300px'>
                    <source src={coding} type="video/mp4" />
                </video>
            </div>
        </div>
     );
}
 
export default WhatWeDo;