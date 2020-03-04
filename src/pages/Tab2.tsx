import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import {camera, trash, close} from 'ionicons/icons'

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import  usePhotoGallery  from '../hooks/usePhotoGallery';
const {takePhoto} = usePhotoGallery()

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick = {() => takePhoto()}>
            <IonIcon icon = {camera}></IonIcon>

          </IonFabButton>

        </IonFab>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
