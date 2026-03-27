package com.example.renovation_website.Entity;

//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
////import jakarta.persistence.Table;
//import org.springframework.data.annotation.Id;

//@Entity
//@Table(name = "media")
public class Media {

//    @jakarta.persistence.Id
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String section;
    private String subSection;

    private String title;
    private String description;

    private String filePath;
    private String fileType;

    public Media() {
        super();
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getSubSection() {
        return subSection;
    }

    public void setSubSection(String subSection) {
        this.subSection = subSection;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public Media(Long id, String section, String subSection, String title, String description, String filePath, String fileType) {
        this.id = id;
        this.section = section;
        this.subSection = subSection;
        this.title = title;
        this.description = description;
        this.filePath = filePath;
        this.fileType = fileType;
    }
}
