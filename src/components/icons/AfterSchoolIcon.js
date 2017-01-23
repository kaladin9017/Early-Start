import React from 'react';
import { Icon, Popup, Segment, Button, Divider, Card, Image } from 'semantic-ui-react';
const tempObj = {
 name: "Gary Klinsky Children's Centers (GKCC)",
 description: "Gary Klinsky Children's Centers (GKCC)  provides after-school learning opportunities on lessons in history, sociology, ecology, science, geography and technology, plus focused explorations into special-interest subjects including journalism, photography, poetry, entrepreneurship.",
 website_url: "http://www.wearebcs.org/bcs/what_we_do/children_full_potential/gkcc:en-us.html",
 free_or_reduced: "reduced_cost",
 distance: 0.63,
 phone_number: "718-310-5600",
 email: "info@WeAreBCS.org",
 video_url: "https://www.youtube.com/user/ONEBrooklynCommunity",
 images: "https://web10.fcny.org/bcs/what_we_do/children_full_potential/gkcc/ccontents_15/preview:en-us.jpg"
}

const AfterSchoolIcon = () => {

  return (
    <Card >
      <Card.Content>
        <Image floated='right' size='large' src={tempObj.images} />
        <Card.Header>
          Available After School Activities 
        </Card.Header>
        <Card.Meta>
          {tempObj.name}
        </Card.Meta>
        <Card.Meta>
          {tempObj.phone_number}
        </Card.Meta>
        <Card.Description>
          {tempObj.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='email' />
        {tempObj.email}
      </a>
    </Card.Content>
  </Card>
)

}


export default AfterSchoolIcon;
