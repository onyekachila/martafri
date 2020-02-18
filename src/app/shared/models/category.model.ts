import { ProductDto } from "./product.model";

export interface CategorySummaryResponseModel {
    Name: string;
    Id: number;
    ExtendedName: string;
    ImageFile: string;
}

export class CategoryDto {
    id: number;
    name: string;
    Description: string;
    ParentcategoryId: number;
    image: CategoryImage;
    subCategories: CategoryDto[];
    products?: ProductDto[];
    ProductPageNum?: number;
}

export interface CategoryImage {
  src: string;
  attachment: string;
}
