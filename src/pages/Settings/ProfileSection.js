import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  ${({ theme }) => theme.typography.h2};
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Field = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Value = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.dark};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.sm};
  font-size: 1rem;
  
  &.focusable:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProfileSection = ({ profile }) => {
  return (
    <>
      <SectionTitle>Profile Settings</SectionTitle>
      <ProfileContainer>
        <Avatar src={profile.avatar} alt="Profile" />
        <InfoContainer>
          <Field>
            <Label>Name</Label>
            <Value 
              className="focusable"
              type="text"
              defaultValue={profile.name}
            />
          </Field>
          <Field>
            <Label>Email</Label>
            <Value
              className="focusable"
              type="email"
              defaultValue={profile.email}
            />
          </Field>
          <Field>
            <Label>Language</Label>
            <Value
              className="focusable"
              type="text"
              defaultValue={profile.language}
            />
          </Field>
          <Field>
            <Label>Parental Controls</Label>
            <Value
              className="focusable"
              type="text"
              defaultValue={profile.parentalControls}
            />
          </Field>
        </InfoContainer>
      </ProfileContainer>
    </>
  );
};

export default ProfileSection;