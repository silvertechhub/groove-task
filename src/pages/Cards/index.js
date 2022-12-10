import React from "react";
// Components
import { Title, Description } from "../styles";
import {
  Hero,
  CardsWrap,
  InlineCards,
  Card,
  CardImg,
  CardContent,
  Button,
} from "./cards";
// Icons
import { ReactComponent as PlayIcon } from "../../assets/logo.svg";
import burna from '../../assets/burna.png';
import koffee from '../../assets/koffee.png';
import lojay from '../../assets/lojay.png';
import hero from '../../assets/hero.png';

;


function Cards() {
  return (
    <>
    <Hero >
      <img src={hero} width='100%' height='100%'/>
    </Hero>
      {/* Section 1 */}
      <CardsWrap>
        <Title>Welcome back:</Title>
        <InlineCards>
          <Card>
            
            <CardImg>
              <img
                src={burna}
                alt="Liked songs"
              />
              <Button className="card__play_button">
               <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked Songs</h3>
              <span>Burna boy, Oxlade, Davido, Tems, Wizkid and others...</span>
            </CardContent>
         
          </Card>
          <Card>
            <CardImg>
              <img
                src={koffee}
                alt="Liked songs"
              />
              <Button className="card__play_button">
               <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked Songs</h3>
              <span>Burna boy, Oxlade, Davido, Tems, Wizkid and others...</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src={lojay}
                alt="Liked songs"
              />
              <Button className="card__play_button">
               <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked Songs</h3>
              <span>Burna boy, Oxlade, Davido, Tems, Wizkid and others...</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src={burna}
                alt="Liked songs"
              />
              <Button className="card__play_button">
               <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked Songs</h3>
              <span>Burna boy, Oxlade, Davido, Tems, Wizkid and others...</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src={lojay}
                alt="Focus"
              />
              <Button className="card__play_button">
                <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked songs</h3>
              <span>Burna boy, Oxlade, Davido, Tems, Wizkid and others...</span>
            </CardContent>
          </Card>
        </InlineCards>
      </CardsWrap>
      {/* Section 2 */}
      <CardsWrap>
        <Title>Welcome to the weekend;;;</Title>
        <InlineCards>
          {/* Card 1 */}
          <Card>
            <CardImg>
              <img
                src={lojay}
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card>
            <CardImg>
              <img
                src={burna}
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <Card>
            <CardImg>
              <img
                src={koffee}
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 4 */}
          <Card>
            <CardImg>
              <img
                src={lojay}
                alt="Regional BR"
              />
              <Button>
                <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 5 */}
     
      
          <Card>
            <CardImg>
              <img
                src={burna}
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon alt='random text' />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Lojay</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
        </InlineCards>
      </CardsWrap>

    </>
  );
}

export default Cards;
