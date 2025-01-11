
import React from 'react'; 
import './LearnPage.css';

function LearnPage() {
    const handleGoToHome = () => {
        window.location.href = '/'; 
    };

    const handleGoBack = () => {
        window.history.back();  
    };

    return (
        <div className="learn">
            <div className="content-container">
                <p>
                    The <strong className="phil-iri">Philippine Informal Reading Inventory (Phil-IRI)</strong> is a tool used to assess reading comprehension levels, helping to determine how well students understand reading passages. It consists of different texts followed by questions that evaluate a student's ability to comprehend and interpret what they have read. Currently, we are developing a digitalized version of the Phil-IRI called <strong className="ephil-iri">ePhil-IRI</strong>, which is designed for Grade 7 students. This online platform aims to make the assessment more accessible and efficient, offering the same diagnostic benefits as the traditional method but in a digital format.
                </p>
                <br />
                <p>
                    If you’re at the <strong className="independent-level">Independent Level</strong>, you’re able to understand the material with little to no difficulty. You would score <strong className="independent-level">between 80-100%</strong>, and this means you can read and comprehend a variety of texts on your own, even more complex ones, without needing any extra help. You're a proficient reader and can work through most reading tasks independently.
                </p>
                <br />
                <p>
                    At the <strong className="instructional-level">Instructional Level</strong>, you might score <strong className="instructional-level">between 59-79%</strong>. This means you can understand the material, but you may need some support or guidance to fully grasp the content. You’re making progress, but targeted help can help you improve your comprehension and reading skills even further.
                </p>
                <br />
                <p>
                    If you’re at the <strong className="frustration-level">Frustration Level</strong>, scoring <strong className="frustration-level">58% or below</strong>, it indicates you might struggle with understanding the material. You find it difficult to comprehend even the basic passages, and you would need significant assistance to fully understand what you’re reading. At this level, focused intervention is essential to help you improve your reading comprehension abilities.
                </p>
            </div>
            
           
            <div className="button-container-custom">
                <button className="go-back-button-custom" onClick={handleGoBack}>
                    ↩
                </button>
                <button className="home-button-custom" onClick={handleGoToHome}>
                    Home
                </button>
            </div>
        </div>
    );
}

export default LearnPage;
