import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map((item) => (
                <BentoGridItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
