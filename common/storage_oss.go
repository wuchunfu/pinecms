package common

import (
	"errors"
	"io"
	"strings"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

type OssUploader struct {
	client *oss.Client
	bucket *oss.Bucket
	host   string
}

func NewOssUploader(config map[string]string) *OssUploader {
	client, err := oss.New("http://oss-cn-shanghai.aliyuncs.com", "LTAI06jdqBkVzLxxxxxxxp2", "PS0Hjxpw6FcmV0xxxxxxxyGuzf0KfxuKCZJUM")
	if err != nil {
		return &OssUploader{
			client: client,
		}
	}
	bucket, err := client.Bucket("")
	if err != nil {
		return nil
	}
	return &OssUploader{
		client: client,
		bucket: bucket,
		host:   "http://blog-assets.mirchen.com",
	}
}

// Upload 上传图片
// storageName 云端路径名.
// LocalFile 要上传的文件名
func (s *OssUploader) Upload(storageName string, LocalFile io.Reader) (string, error) {
	if s.client == nil {
		return "", errors.New("ossClient is error")
	}
	if err := s.bucket.PutObject(storageName, LocalFile); err != nil { //上传图片对象
		return "", err
	}
	return s.host + "/" + strings.TrimLeft(storageName, "/"), nil
}
