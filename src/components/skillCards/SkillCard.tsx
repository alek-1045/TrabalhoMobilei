import React from "react";
import { TouchableOpacityProps } from 'react-native'
import { ButtonSkill, TextSkill, TextSkill1, TextSkill2 } from './styles'

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
    skill1: string;
    skill2: string;
}

export function SkillCard({skill,skill1,skill2, ...rest}: SkillCardProps) {
    return (
        < ButtonSkill
            {...rest}
            >
            <TextSkill>{skill}</TextSkill>
            <TextSkill1>{skill1}</TextSkill1>
            <TextSkill2>{skill2}</TextSkill2>
            
        </ButtonSkill>
    )
}

