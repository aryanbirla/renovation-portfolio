package com.example.renovation_website.Controllers;

import com.example.renovation_website.Entity.Media;
//import com.example.renovation_website.Repositories.MediaRepositories;
import com.example.renovation_website.Services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/media")
@CrossOrigin("*")
public class MediaController {

//    @Autowired
//    private MediaRepositories mediaRepository;
//
//    @Autowired
//    private FileService fileService;


//    // ✅ Upload
//    @PostMapping("/upload")
//    public ResponseEntity<?> upload(
//            @RequestParam("file") MultipartFile file,
//            @RequestParam String section,
//            @RequestParam String subSection,
//            @RequestParam String title,
//            @RequestParam String description
//    ) throws IOException {
//
//        String fileName = fileService.saveFile(file);
//
//        Media media = new Media();
//        media.setSection(section);
//        media.setSubSection(subSection);
//        media.setTitle(title);
//        media.setDescription(description);
//        media.setFilePath(fileName);
//        media.setFileType(file.getContentType());
//
//        mediaRepository.save(media);
//
//        return ResponseEntity.ok("Uploaded");
//    }
//
//
//    // ✅ Get by section
//    @GetMapping("/{section}")
//    public List<Media> getBySection(@PathVariable String section) {
//        return mediaRepository.findBySection(section);
//    }
//
//
//    // ✅ Delete
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> delete(@PathVariable Long id) {
//        mediaRepository.deleteById(id);
//        return ResponseEntity.ok("Deleted");
//    }

    // ✅ MOCK DATA
    @GetMapping("/{section}")
    public List<Map<String, Object>> getMockData(@PathVariable String section) {

        List<Map<String, Object>> list = new ArrayList<>();

        for (int i = 1; i <= 6; i++) {

            Map<String, Object> media = new HashMap<>();

            media.put("id", i);
            media.put("title", section + " Work " + i);

            // random images
            media.put("filePath",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60");

            list.add(media);
        }

        return list;
    }


    // ✅ MOCK UPLOAD
    @PostMapping("/upload")
    public ResponseEntity<?> uploadMock() {
        return ResponseEntity.ok("Mock Upload Success");
    }


    // ✅ MOCK DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMock(@PathVariable Long id) {
        return ResponseEntity.ok("Mock Deleted " + id);
    }
}
