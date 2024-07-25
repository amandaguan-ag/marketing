import Image from "next/image";

const BlogCard = ({ title, category, description, imageSrc }) => {
  return (
    <div>
      <Image src={imageSrc} alt={title} width={340} height={288} />
      <div>
        <div>
          <div>
            <span>{category}</span>
          </div>
          <span>{title}</span>
        </div>
        <div>
          <span>{description}</span>
          <div>
            <div>
              <span>Read more</span>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
