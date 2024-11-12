'use client'

import React from 'react'

import s from './share.module.css'
import { ExportButton } from '@/components/ExportButton'
import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'
import { useTranslations } from 'next-intl'

export default function ShareRoute() {
  const t = useTranslations('core')

  return (
    <Layout>
      <div className={s.container}>
        <Hero title={t('exportTitle')} subtitle={t('exportSubtitle')}>
          <ExportButton
            text={t('exportAction')}
            feedbackText={t('exportComplete')}
          />
        </Hero>
      </div>
    </Layout>
  )
}
