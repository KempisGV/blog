import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blog = state.find(blog => blog.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blog.title, content: blog.content }}
      onSubmit={({ title, content }) => {
        editBlogPost({ id, title, content }, () => {
          //el metodo pop hace que se retroceda a la vista anterior
          navigation.pop();
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
