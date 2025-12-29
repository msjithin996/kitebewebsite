"use client";

import HeroBlock, { HeroBlockProps } from "./HeroBlock";
import IntroBlock, { IntroBlockProps } from "./IntroBlock";
import ImageGridBlock, { ImageGridBlockProps } from "./ImageGridBlock";
import ContentBlock, { ContentBlockProps } from "./ContentBlock";
import TwoColumnTextBlock, { TwoColumnTextBlockProps } from "./TwoColumnTextBlock";
import ProductFeatureBlock, { ProductFeatureBlockProps } from "./ProductFeatureBlock";
import CarouselBlock, { CarouselBlockProps } from "./CarouselBlock";
import BrandValuesBlock, { BrandValuesBlockProps } from "./BrandValuesBlock";
import ImpactTextBlock, { ImpactTextBlockProps } from "./ImpactTextBlock";
import ResearchHeaderBlock, { ResearchHeaderBlockProps } from "./ResearchHeaderBlock";
import ArticleSectionBlock, { ArticleSectionBlockProps } from "./ArticleSectionBlock";
import BentoGridBlock, { BentoGridBlockProps } from "./BentoGridBlock";

type BaseBlock = { id?: string };

// Define the Union Type for all blocks
export type Block = BaseBlock & (
    | { type: "hero"; data: HeroBlockProps }
    | { type: "intro"; data: IntroBlockProps }
    | { type: "image-grid"; data: ImageGridBlockProps }
    | { type: "content"; data: ContentBlockProps }
    | { type: "two-column-text"; data: TwoColumnTextBlockProps }
    | { type: "product-feature"; data: ProductFeatureBlockProps }
    | { type: "carousel"; data: CarouselBlockProps }
    | { type: "brand-values"; data: BrandValuesBlockProps }
    | { type: "impact-text"; data: ImpactTextBlockProps }
    | { type: "research-header"; data: ResearchHeaderBlockProps }
    | { type: "article-section"; data: ArticleSectionBlockProps }
    | { type: "bento-grid"; data: BentoGridBlockProps }
    | { type: "unknown"; data: any }
);

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
    return (
        <>
            {blocks.map((block, index) => {
                const FullWidthBlocks = ["two-column-text", "product-feature", "carousel", "brand-values", "impact-text", "research-header", "article-section", "bento-grid"];
                const isFullWidth = FullWidthBlocks.includes(block.type);

                const BlockComponent = (() => {
                    switch (block.type) {
                        case "hero": return <HeroBlock {...block.data} />;
                        case "intro": return <IntroBlock {...block.data} />;
                        case "image-grid": return <ImageGridBlock {...block.data} />;
                        case "content": return <ContentBlock {...block.data} />;
                        case "two-column-text": return <TwoColumnTextBlock {...block.data} />;
                        case "product-feature": return <ProductFeatureBlock {...block.data} />;
                        case "carousel": return <CarouselBlock {...block.data} />;
                        case "brand-values": return <BrandValuesBlock {...block.data} />;
                        case "impact-text": return <ImpactTextBlock {...block.data} />;
                        case "research-header": return <ResearchHeaderBlock {...block.data} />;
                        case "article-section": return <ArticleSectionBlock {...block.data} />;
                        case "bento-grid": return <BentoGridBlock {...block.data} />;
                        default: return null;
                    }
                })();

                if (!BlockComponent) return null;

                return isFullWidth ? (
                    <div key={block.id || index}>{BlockComponent}</div>
                ) : (
                    <div key={block.id || index} className="container mx-auto px-4 md:px-8 lg:px-12">
                        {BlockComponent}
                    </div>
                );
            })}
        </>
    );
}
