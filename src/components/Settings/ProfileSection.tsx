import React from 'react';
import styled from 'styled-components';
import { Profile } from '../../types';

interface ProfileSectionProps {
  currentProfile: Profile;
  availableProfiles: Profile[];
  onSwitchProfile: (id: string) => void;
  onUpdateProfile: (profile: Profile) => void;
  focusedIndex: number;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  currentProfile,
  availableProfiles,
  onSwitchProfile,
  onUpdateProfile,
  focusedIndex
}) => {
  const handleEditProfile = (profile: Profile) => {
    const newName = prompt('Enter new profile name:', profile.name);
    if (newName) {
      onUpdateProfile({ ...profile, name: newName });
    }
  };

  return (
    <Section>
      <Title>Profiles</Title>
      <CurrentProfile isFocused={focusedIndex === 0}>
        <ProfileImage src={currentProfile.imageUrl || '/default-avatar.png'} />
        <ProfileInfo>
          <ProfileName>{currentProfile.name}</ProfileName>
          <EditButton onClick={() => handleEditProfile(currentProfile)}>
            Edit Profile
          </EditButton>
        </ProfileInfo>
      </CurrentProfile>
      <OtherProfiles>
        {availableProfiles
          .filter(profile => profile.id !== currentProfile.id)
          .map((profile, index) => (
            <ProfileItem
              key={profile.id}
              isFocused={index + 1 === focusedIndex}
              onClick={() => onSwitchProfile(profile.id)}
            >
              <SmallProfileImage src={profile.imageUrl || '/default-avatar.png'} />
              <SmallProfileName>{profile.name}</SmallProfileName>
            </ProfileItem>
          ))}
      </OtherProfiles>
    </Section>
  );
};

const Section = styled.section`
  margin: 20px 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  font-size: 24px;
`;

const CurrentProfile = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  margin-bottom: 20px;
  transform: scale(${({ isFocused }) => (isFocused ? 1.02 : 1)});
  border: ${({ isFocused, theme }) =>
    isFocused ? `2px solid ${theme.colors.primary}` : 'none'};
  transition: all 0.3s ease;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  margin-bottom: 10px;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const OtherProfiles = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const ProfileItem = styled.div<{ isFocused: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  cursor: pointer;
  transform: scale(${({ isFocused }) => (isFocused ? 1.02 : 1)});
  border: ${({ isFocused, theme }) =>
    isFocused ? `2px solid ${theme.colors.primary}` : 'none'};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SmallProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const SmallProfileName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-align: center;
`;

export default ProfileSection;