import { StyleSheet } from 'react-native';


/**
Level 1: NHS blues

NHS Dark Blue #003087
NHS Blue #005EB8
NHS Bright Blue #0072CE
NHS Light Blue #41B6E6
NHS Aqua Blue #00A9CE

Level 2: NHS neutrals
These colours help to support the top level blues.
Black and dark grey can be used for type, depending on the background and application.
The lighter greys can be used as backgrounds when they are appropriate and are useful online colours.
White is, of course, the most important neutral base.
These colours will support the overall blue and white look if they are used with the proper emphasis.
NHS Black #231f20
NHS Dark Grey #425563
NHS Mid Grey #768692
NHS Pale grey #E8EDEE
White #FFFFFF

Level 3: NHS support greens
Green is close to blue in the colour spectrum and gives a feel of being in the same colour family.
Therefore, when they are used moderately and in a secondary support role, they will not compromise the strong associations people have with blue and white.
However, if it becomes too dominant it will impact on people’s ability to instantly recognise the NHS as being the source of the information.
NHS Dark Green #006747
NHS Green #009639
NHS Light Green #78BE20
NHS Aqua Green #00A499

Level 4: NHS highlights
Highlights are very useful for drawing attention to details, helping to warm up the blue look and providing accent colours to enable NHS organisations, partnerships and services to differentiate themselves from each other. However, they should not be used too heavily otherwise they change the overall look dramatically and people will not associate your communication with the NHS. Therefore, use minimally and do not use large blocks of these highlight colours.
The highlight colour ‘Emergency Services Red’ is not exclusively for use in relation to emergency and urgent care services.
However, because of its strong association and use in this area, you should carefully consider how you use it for other purposes.
Euro Ambulance Yellow is a colour reference to be used for ambulance livery only.
NHS Purple #330072
Dark Pink #7C2855
NHS Pink #AE2573
NHS Dark Red #8A1538
Emergency Services Red #DA291C
NHS Orange #ED8B00
NHS Warm Yellow #FFB81C
NHS Yellow #FAE100
*/
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    height: 65,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingTop: 20,
    paddingRight:5,
    backgroundColor: '#0072CE',
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 18,
    color: 'white',
    paddingTop: 14,
    paddingLeft: 14
  },
  timeInput: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: '#ff0000',
  },
});

export default styles;
