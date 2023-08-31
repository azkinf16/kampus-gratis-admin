import { FavoriteArticleModule } from 'apps/kg/modules/sekilas-ilmu/favorite/module'
import { NextPage } from 'next'
import React, { ReactElement } from 'react'

const FavoritePage:NextPage = (): ReactElement => {
  return (
    <FavoriteArticleModule/>
  )
}

export default FavoritePage