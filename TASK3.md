## Task 3: Deletion of Comments

## User Authorization and Roles
- **Implement User Authentication:**
  - It is advisible to ensure that users are authenticated before allowing them to delete comments. This prevents unauthorized access and actions.
  
  - Trustworthiness, i.e., if we have no way of uniquely identifying comments by the user, then it will be hard to determine how many unique users commented on an article, and this might decrease the quality (trustworthiness) of the article. It is advisable to register the user and authenticate them with the provided email.

- **Role-Based Access:**
  - Differentiate between regular users and admins. Regular users should only be able to delete their own comments, while admins might have more privileges.

### In our case, we don't ask for user registration to write a comment (not required for the task), so let's add the delete functionality as it is, and we need to break it down as follows:

## Frontend Implementation
- **Delete Button on UI:**
  - Introduce a delete button on the CommentCard component. (If there is Authorization, this button should only be visible to the user who created the comment and to admins.)
- **Delete Confirmation:**
  - Implement a confirmation step (like a popup or alert message) to prevent accidental deletion.
- **HandleDelete Function:**
  - Create a function to handle the deletion process, which should call the backend API and handle any responses or errors. (handleDeleteFunction && CommentService deleteComment)
- **Update UI Dynamically:**
  - Upon successful deletion, update the UI to reflect the change without needing to reload the page.

## Backend Implementation
- **API Endpoint for Deletion:**
  - Create a new API route (let's say `DELETE /comments/:commentId`) to handle comment deletion requests.
- **Authorization Check (this step is if there is authorization):**
  - Ensure the backend verifies if the requesting user is authorized to delete the comment. This could involve checking if the user is the comment creator or an admin.
- **Database Interaction:**
  - Implement logic in `Comment Repository` to delete the comment from the database.
- **Error Handling:**
  - We should handle and return errors, especially for cases like attempting to delete a comment that doesn't exist or unauthorized attempts.



