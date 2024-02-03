import styled from 'styled-components';
import { Sidebar } from 'flowbite-react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

const StyledSocialSidebar = styled.div`
  position: fixed;
  top: 30%;
  right: 0;
  transform: translateY(-50%);
  z-index: 999;
  background-color: #fff;
  shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledIcon = styled.div`
font-size: 24px;
color: #000;
`;

const SocialSidebar = () => (
  <div className="absolute-right">
    <StyledSocialSidebar>
      <Sidebar aria-label="Default sidebar">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <StyledIcon>
                <FaWhatsapp />
              </StyledIcon>
            </Sidebar.Item>
            <Sidebar.Item>
              <StyledIcon>
                <FaFacebook />
              </StyledIcon>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </StyledSocialSidebar>
  </div>
);
export default SocialSidebar;
