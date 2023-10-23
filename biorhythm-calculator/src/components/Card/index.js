import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import { calculateBiorythms } from "../../lib/calculateBiorhythm";
import dayjs from "dayjs";
import Chart from "../Chart";
import "./styles.css";

function formatDate(string) {
    const dat = dayjs(string);
    return dat.format("D MMMM YYYY");
}

const Card = ({birthDate, targetDate}) => {
  const bio = calculateBiorythms(birthDate, targetDate);

  return (
    <IonCard>
      <Chart birthDate={birthDate} targetDate={targetDate} />
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="physical">Physical: {bio.physical.toFixed(4)}</p>
        <p className="emotional">Emotional: {bio.emotional.toFixed(4)}</p>
        <p className="intellectual">Intellectual: {bio.intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default Card;