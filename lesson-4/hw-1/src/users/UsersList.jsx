import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as paginationActions from './pagination.actions';

class UsersList extends Component {
  render() {
    const { goNext, goPrev, users, currentPage } = this.props;

    const itemsPerPage = 0;
    const newCurrentPage = currentPage + 1;

    const sliceFrom = itemsPerPage * currentPage;
    const sliceTo = itemsPerPage * newCurrentPage;

    const usersToRender = users.slice(sliceFrom, sliceTo);
    return (
      <div>
        <Pagination
          goNext={goNext}
          goPrev={goPrev}
          currentPage={newCurrentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersToRender.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  goNext: paginationActions.goNext,
  goPrev: paginationActions.goPrev,
};

export default connect(mapState, mapDispatch)(UsersList);
