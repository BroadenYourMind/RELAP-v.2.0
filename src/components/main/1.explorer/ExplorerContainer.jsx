import React from 'react';
import styled from 'styled-components';
import containerStyles from "../../Container.jsx";
import ExploreContent from './ExploreContent.jsx';
import ExploreImage from './ExploreImage.jsx';
import ExploreSocial from './ExploreSocial.jsx';

const StyledExplorerContainer = styled.div`
${containerStyles}
padding-top: 143px;
width: 100%;
display: flex; 
position: relative;
justify-content: space-between;
max-height: 768px;

@media ${props => props.theme.media.tablet} {
    padding-top: 64px;
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    max-height: 820px;
    }
`

const ExplorerContainer = (props) => {
    return (
        <StyledExplorerContainer {...props}>
            <ExploreContent></ExploreContent>
            <ExploreImage></ExploreImage>
            <ExploreSocial></ExploreSocial>
        </StyledExplorerContainer>
    )
}

export default ExplorerContainer